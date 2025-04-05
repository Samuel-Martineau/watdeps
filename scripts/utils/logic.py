from pydantic import BaseModel
from typing import Union

Expr = Union["And", "Or", str]


class And(BaseModel):
    all: list[Expr]


class Or(BaseModel):
    any: list[Expr]


def __to_cnf(expr: Expr) -> Expr:
    if isinstance(expr, And):
        if len(expr.all) == 0:
            return expr

        if len(expr.all) == 1:
            return __to_cnf(expr.all[0])

        converted = [__to_cnf(e) for e in expr.all]

        ands = [e for e in converted if isinstance(e, And)]
        others = [e for e in converted if not isinstance(e, And)]

        return And(all=[e for a in ands for e in a.all] + others)
    elif isinstance(expr, Or):
        if len(expr.any) == 0:
            return expr

        if len(expr.any) == 1:
            return __to_cnf(expr.any[0])

        left, right = __to_cnf(expr.any[0]), __to_cnf(Or(any=expr.any[1:]))

        if isinstance(left, str):
            left = Or(any=[left])

        if isinstance(right, str):
            right = Or(any=[right])

        match (left, right):
            case Or(), Or():
                return Or(any=left.any + right.any)
            case Or(), And():
                return And(all=[__to_cnf(Or(any=[a] + left.any)) for a in right.all])
            case And(), Or():
                return And(all=[__to_cnf(Or(any=[a] + right.any)) for a in left.all])
            case And(), And():
                return And(
                    all=[__to_cnf(Or(any=[a, b])) for a in left.all for b in right.all]
                )
    else:
        return expr


def to_cnf(expr: Expr) -> And:
    expr = __to_cnf(expr)
    if isinstance(expr, And):
        return expr
    return And(all=[expr])


def to_simple_cnf(expr: Expr) -> list[list[str]]:
    expr = to_cnf(expr)

    return [(o.any if isinstance(o, Or) else o) for o in expr.all]

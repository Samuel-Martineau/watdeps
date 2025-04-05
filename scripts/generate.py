import sys
import os
import json

import pydantic
from tqdm import tqdm

import utils.logic
import utils.llm
import utils.waterloo

target_subject_code = sys.argv[1]

all_courses = utils.waterloo.get_all_courses()
math_courses = [
    c
    for c in all_courses
    if c.subject_code == target_subject_code.upper() and int(c.catalog_number) < 500
]

courses = []

iterator = tqdm(math_courses)
for course in iterator:
    course_label = f"{course.subject_code} {course.catalog_number}"
    iterator.set_description(course_label)
    try:
        courses.append(
            {
                "course": course_label,
                "requirements": utils.logic.to_simple_cnf(
                    utils.llm.parse_course_requirements(course.requirements_description)
                ),
            }
        )
    except (json.JSONDecodeError, pydantic.ValidationError):
        pass

output_path = f"data/{target_subject_code}"
os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(f"{output_path}.js", "w", buffering=1) as f:
    f.write(
        f"const COURSES_{target_subject_code.upper()} = {json.dumps(courses, indent=4)};\n"
    )

with open(f"{output_path}.d.ts", "w", buffering=1) as f:
    f.write(f"declare const COURSES_{target_subject_code.upper()}: string[][];\n")

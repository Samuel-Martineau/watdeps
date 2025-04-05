import os

import waterloo_open_data_api_client
import waterloo_open_data_api_client.api
import waterloo_open_data_api_client.api.courses
import waterloo_open_data_api_client.api.courses.get_v_3_courses_term_code
import waterloo_open_data_api_client.api.terms
import waterloo_open_data_api_client.api.terms.get_v_3_terms_current

waterloo_client = waterloo_open_data_api_client.AuthenticatedClient(
    base_url="https://openapi.data.uwaterloo.ca",
    token=os.environ.get("WATERLOO_API_KEY"),
    auth_header_name="X-API-KEY",
    prefix="",
)


def get_current_term_code():
    current_term = waterloo_open_data_api_client.api.terms.get_v_3_terms_current.sync(
        client=waterloo_client
    )
    return current_term.term_code


def get_all_courses():
    courses = waterloo_open_data_api_client.api.courses.get_v_3_courses_term_code.sync(
        get_current_term_code(), client=waterloo_client
    )

    return courses or []

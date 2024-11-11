#!/usr/bin/env python3
"""pagination helper function"""

def index_range(page: int, page_size: int) -> tuple:
    """ calculate the start and end indexes for a page of data """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return start_index, end_index


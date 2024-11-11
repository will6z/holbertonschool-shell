#!/usr/bin/env python3
"""
This module provides a function `sum_mixed_list` that returns the sum of a list containing integers and floats.
"""


from typing import List, Union

def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Returns the sum of a list containing integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): A list of integers and floats.

    Returns:
        float: The sum of the numbers in the list.
    """
    return sum(mxd_lst)

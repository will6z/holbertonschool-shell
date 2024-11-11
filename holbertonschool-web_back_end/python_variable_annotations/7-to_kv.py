#!/usr/bin/env python3
""" provides a function `sum_mixed_list` that returns the sum of a list containing integers and floats. """
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """reutrn the a tuple  that takes str and floats"""
    return (k, float(v ** 2))

#!/usr/bin/env python3
""" adding annotations to the func"""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """adding the annotation to func"""
    return [(i, len(i)) for i in lst]

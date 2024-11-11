#!/usr/bin/env python3
"""Module for measuring the runtime of an asynchronous function."""

import asyncio
import time
from typing import List

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the average runtime of wait_n function.

    Args:
        n (int): The number of times to spawn wait_random.
        max_delay (int): The maximum delay in seconds.

    Returns:
        float: The average time per call in seconds.
    """
    start_time = time.time()

    asyncio.run(wait_n(n, max_delay))

    end_time = time.time()
    total_time = end_time - start_time

    return total_time / n

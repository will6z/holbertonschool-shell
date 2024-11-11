#!/usr/bin/env python3
""" task 0 """
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """random number (0, 10)"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

#!/usr/bin/env python3
"""random delay 1-10"""
import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """waitin for random num"""
    delay = random.uniform(0, max_delay)

    await asyncio.sleep(delay)

    return delay

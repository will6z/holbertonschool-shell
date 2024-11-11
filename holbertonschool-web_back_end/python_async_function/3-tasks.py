#!/usr/bin/env python3
"""Module for creating an asyncio.Task from an asynchronous function."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create an asyncio.Task for the wait_random coroutine.

    Args:
        max_delay (int): The maximum delay in seconds.

    Returns:
        asyncio.Task: A Task object wrapping the wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))

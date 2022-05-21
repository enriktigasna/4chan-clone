import React from 'react'
import styles from '../styles/BoardsBox.module.css'
import { useState, setState, useEffect } from "react"

export default function BoardsBox() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        fetch("/api/getBoards")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setBoards(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    return (
        <div className={styles.outerBox}>
            <div className={styles.boxInner}>
                <div className={styles.boxbar}>
                    <h2>Boards</h2>
                    <a data-cmd="filter" href="#" className={styles.filter}>filter ▼</a>
                </div>
                <div className={styles.boxContent}>
                    <div className={styles.column}>
                        <h3>Exposed</h3>
                        <ul>
                            {boards.map(board => (
                                <li key={board.slug}>
                                    <a href={board.slug}>
                                        {board.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

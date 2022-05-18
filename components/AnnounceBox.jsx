import React from 'react'
import styles from '../styles/AnnounceBox.module.css'

export default function Box() {
    return (
        <div className={styles.outerBox}>
            <div className={styles.boxInner}>
                <div className={styles.boxbar}>
                    <h2>What is 4chan?</h2>
                    <a data-cmd="x-wot" href="#" className={styles.closeButton}></a>
                </div>
                <div className={styles.boxContent}>
                    <div className={styles.column}>
                        <p>
                            4chan is a simple image-based bulletin board where anyone can post comments and share images. There are boards dedicated to a variety of topics, from Japanese animation and culture to videogames, music, and photography. Users do not need to register an account before participating in the community. Feel free to click on a board below that interests you and jump right in!
                        </p>
                            <br />
                        <p>
                            Be sure to familiarize yourself with the <a href="/rules">Rules</a> before posting, and read the <a href="/faq" title="Frequently Asked Questions">FAQ</a> if you wish to learn more about how to use the site.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

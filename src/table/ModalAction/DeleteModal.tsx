import React, { useState } from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal'
import { useCrudApiClient } from '../../apiClientProvider'

import style from './modal.module.css'

const DeleteModal = ({ pageData = [], url = '', pkField = 'id', index, callback }) => {
    const apiClient = useCrudApiClient()
    const [modalOpen, setIsOpen] = useState<boolean>(false)
    const [error, setErrorText] = useState<string>()

    function closeModal() {
        setIsOpen(false)
    }

    function handleDelete(event) {
        event.preventDefault()

        const deleteUrl = index == null ? url : `${url}${pageData[index].original[pkField]}/`

        apiClient
            .delete(deleteUrl)
            .then(() => {
                closeModal()
            })
            .catch(e => setErrorText(e.response.data.detail))

        callback()
    }

    return (
        <>
            <button
                disabled={index == null}
                onClick={e => {
                    e.preventDefault()
                    setIsOpen(true)
                }}
            >
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {index == null ? null : (
                <Modal isOpen={modalOpen} onRequestClose={closeModal} className={style.modal}>
                    {error ? <div className={style.error}>{error}</div> : null}
                    <form id="formDelete" onSubmit={handleDelete}>
                        <div>Delete selected entry?</div>
                        <div className={`right ${style.submitBlock}`}>
                            <button type="submit" className="btn">
                                Submit
                            </button>
                            <button onClick={closeModal} className="btn red lighten-2">
                                close
                            </button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    )
}

export default DeleteModal

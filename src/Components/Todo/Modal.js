import React, { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const FormSelect = styled.select`
  margin-bottom: 10px;
  padding: 8px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [hasDeadline, setHasDeadline] = useState(true);
    const [priority, setPriority] = useState('medium');

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, deadline: hasDeadline ? deadline : null, priority });
        onClose(); // Close modal after submit
    };

    return (
        <ModalBackground onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                    <label>
                        Todo Title:
                        <FormInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    </label>
                    <label>
                        Has Deadline:
                        <FormInput type="checkbox" checked={hasDeadline} onChange={e => setHasDeadline(e.target.checked)} />
                    </label>
                    {hasDeadline && (
                        <label>
                            Deadline:
                            <FormInput type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
                        </label>
                    )}
                    <label>
                        Priority:
                        <FormSelect value={priority} onChange={e => setPriority(e.target.value)}>
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </FormSelect>
                    </label>
                    <SubmitButton type="submit">Add Todo</SubmitButton>
                </form>
            </ModalContent>
        </ModalBackground>
    );
};

export default Modal

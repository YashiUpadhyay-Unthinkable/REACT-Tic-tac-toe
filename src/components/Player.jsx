import { useState } from 'react';

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [playerName, setName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    // schedules a state update to opposite of current value
    setIsEditing((edit) => !edit);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleNameChange}
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
}

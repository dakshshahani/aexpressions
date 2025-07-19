import React from 'react';

export default function ChatPage() {
  return (
    <div className='chat-page'>
        <h2>Can't find your expression? Ask AI to create it!</h2>
        <p>Enter your expression and we'll create it for you!</p>
        <form>
            <input type='text' placeholder='camera shake wiggle expression..' />
            <button type='submit'>Submit</button>
            <button type='reset'>Reset</button>
        </form>
    </div>
  );
}
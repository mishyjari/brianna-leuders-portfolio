import React from 'react';

export default function NewUpload() {
  return (
    <div>
      <form action='/assets' method='post'>
        <input type='file' name='image' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

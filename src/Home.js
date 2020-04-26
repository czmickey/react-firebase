import React, { useState } from 'react';
import fire from './config/fire';

const Home = () => {
  const [status, setStatus] = useState(null);
  const [statusCloud, setStatusCloud] = useState(null);

  const firestore = fire.firestore();
  const docRef = firestore.doc('all/status');

  const logout = () => {
    fire.auth().signOut();
  };

  const handleStatusChange = e => {
    setStatus(e.target.value);
  };

  const saveStatus = e => {
    e.preventDefault();
    docRef
      .set({
        text: status,
      })
      .then(() => {
        console.log('ulozeno');
      })
      .catch(error => {
        console.log('error: ', error);
      });
  };

  const loadStatus = e => {
    e.preventDefault();
    docRef
      .get()
      .then(doc => {
        if (doc && doc.exists) {
          const myData = doc.data();
          setStatusCloud(myData.text);
        }
      })
      .catch(error => console.log('error: ', error));
  };

  const realTimeUpdate = () => {
    docRef.onSnapshot(doc => {
      if (doc && doc.exists) {
        const myData = doc.data();
        setStatusCloud(myData.text);
      }
    });
  };

  realTimeUpdate();

  return (
    <>
      <div className="col-md-6">
        <h1>Home</h1>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="col-md-6 mt-5">
        <strong>Status: {statusCloud != null ? statusCloud : '?'}</strong>
      </div>
      <div className="col-md-6">
        <form>
          <input type="text" name="status" onChange={handleStatusChange} />
          <button type="submit" onClick={saveStatus}>
            Nastavit
          </button>
          <button onClick={loadStatus}>Načíst</button>
        </form>
      </div>
    </>
  );
};

export default Home;

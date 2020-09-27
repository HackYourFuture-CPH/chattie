import React from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import useFetch from '../../hooks/useFetch';

export default function Channel() {
  const { id } = useParams();

  const { response: messages, loading, error } = useFetch(
    `/api/messages?channel_id=${id}`,
  );

  if (loading) {
    return <>Loading, please wait!</>;
  }

  if (error) {
    return <>An error has occurred ☹️</>;
  }

  if (messages.length === 0) {
    return (
      <>
        <p>Messages not found for channel with id: {id}</p>
        <UserContext.Consumer>
          {(user) => {
            const email = user ? user.email : '';
            return <div>This is a private channels for the user: {email}.</div>;
          }}
        </UserContext.Consumer>
      </>
    );
  }
  //  return console.log(messages);
}

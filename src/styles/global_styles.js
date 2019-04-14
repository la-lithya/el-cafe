/*
 * Global UI Styles 
 */


import styles from 'styled-components';


export const Container = styles.div`
  margin: 10px;
`;

export const Form = styles.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px;
`;

export const FormInput = styles.input`
  margin-bottom: 10px;
  font-size: 1rem;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding: 5px;
  line-height: 1.5rem;
  color: teal;
`;

export const Button = styles.button`
  font-size: 1rem;
  padding: 20px;
  border: none;
  background-color: teal;
  color: lightgray;
  border-radius: 3px;
  width: 100%;
`;
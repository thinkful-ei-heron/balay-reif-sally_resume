/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <main className="App">
      <header>
        <h2>{props.name} Student</h2>
      </header>
      <section className='contant-container'>
        <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="A picture of Sally Student" height="400px" width="300px" />
        <section><a href="mailto:sallystudent@gmail.com">sallystudent@gmail.com</a></section>
        <a href="tel:+14075752149">407-575-2149</a>
        <address>
          123 Street Way
          Boulder, CO #####
        </address>
      </section>
      <section className='education-container'>
        <header>
          <h2>Education</h2>
        </header>
        <p>Bachelor of Science in Software Development, University of Central Florida</p>
      </section>
      <section className="experience-container">
        <header>
          <h2>Work Experience</h2>
        </header>
        <h4>Front End Developer | Thinkful | May 2019 to present</h4>
        <p>Fusce mauris enim, elementum a accumsan a, pulvinar in leo. Proin nec imperdiet augue, ut accumsan felis. Donec porta risus sed rutrum rutrum. Sed a risus eu ipsum vehicula iaculis sit amet in augue. Fusce at quam lacus. Donec fringilla placerat magna, venenatis mollis felis ullamcorper quis. Aenean mattis nisi augue, dictum fringilla augue sagittis eu. Suspendisse egestas, sem eu iaculis fermentum, urna sem faucibus massa, sed fringilla augue ex nec orci.</p>
        <h4>Web Development Intern | Thinkful | May 2018 to May 2019</h4>
        <p>Fusce mauris enim, elementum a accumsan a, pulvinar in leo. Proin nec imperdiet augue, ut accumsan felis. Donec porta risus sed rutrum rutrum. Sed a risus eu ipsum vehicula iaculis sit amet in augue. Fusce at quam lacus. Donec fringilla placerat magna, venenatis mollis felis ullamcorper quis. Aenean mattis nisi augue, dictum fringilla augue sagittis eu. Suspendisse egestas, sem eu iaculis fermentum, urna sem faucibus massa, sed fringilla augue ex nec orci.</p>
      </section>
    </main>
  );
}

export default App;

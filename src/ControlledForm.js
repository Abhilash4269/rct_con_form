import React, {useState}from 'react'

function ControlledForm() {

    const [state, setState] = useState({
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
        courses:'react',
    });

    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email:'',
        gender:'',
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();
        var errKeys = Object.keys(state).filter((key) => {
          if (state[key] === '' ) {
            return key;
          }
        });
        if (errKeys.length >= 1) {
          alert('Please fill all fields');
        } else {
          alert(state);
        }
    };

    const handleChange = (e) => {
    
        if (e.target.value === '') {
          setErrors({...errors,[e.target.name]:`${e.target.name} is Required`});
        } else {
          setErrors({...errors,[e.target.name]:''})
        }
    
        // First way to update object of object
        setState({ ...state, [e.target.name]: e.target.value });
    
        // Second way to update object of object
        // this.setState({
        //   errors: { [e.target.name]: 'Required', lastName: 'Required' },
        //   gender: 'female',
        // });
    
        console.log(state);
      };
     
        return (
          <>
            <h3> User Form </h3>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <label> First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  value={state.firstName}
                  onChange={(e) => handleChange(e)}
                />{' '}
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {errors.firstName}{' '}
                </span>
              </div>
              <br />
              <div>
                <label> Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  value={state.lastName}
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <span style={{ color: 'red' }}> {errors.lastName} </span>
              </div>
              <br />
              <div>
                <label> Email: </label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={(e) => handleChange(e)}
                />
                <br />
                <span style={{ color: 'red' }}> {errors.email} </span>
              </div>
              <br />
              <div>
                <label> Gender: </label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => handleChange(e)}
                />{' '}
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => handleChange(e)}
                />{' '}
                Female
                <br />
                <span style={{ color: 'red' }}> {errors.gender} </span>
              </div>
              <br />
              <div>
                <label> Courses: </label>
                <select
                  name="courses"
                  value={state.courses}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="react"> React </option>
                  <option value="node"> Node </option>
                  <option value="mysql"> MySQL </option>
                  <option value="mongo"> Mongo </option>
                </select>
              </div>
              <br />
              <button type="submit"> Submit </button> &nbsp;
              <button type="button"> Reset </button> &nbsp;
            </form>
          </>
        );
      
    }
    
    export default ControlledForm;
    
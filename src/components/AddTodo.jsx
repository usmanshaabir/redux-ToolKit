import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';
import { increment } from '../feature/Percentage/percentageSlice';
import { decrement } from '../feature/Percentage/percentageSlice';


export default function AddTodo() {
  const count = useSelector((state) => state.percentage.count);

  console.log("count", count)

  const [input, setInput] = useState()
  const dispatch = useDispatch()

  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput("")

  }
  const handleIncrement = () => {
    dispatch(increment())
  }
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" value={input} onChange={(event) => { setInput(event.target.value) }} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <button onClick={handleIncrement} style={{ backgroundColor: "red" }}>add</button >
      <p>{count} dsd</p>
      <button onClick={() => { dispatch(decrement()) }} style={{ backgroundColor: "green" }}>subtract</button >
    </>
  )
}

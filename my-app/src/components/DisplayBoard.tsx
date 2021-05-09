import React from 'react'

interface IDisplayBoardProps {
  numberOfUsers: number
  getAllUsers: Function
}

export const DisplayBoard = (props: IDisplayBoardProps) => {
  return (
    <div className="display-board mrgnbtm">
      <h4>Users Created</h4>
      <div className="number">{props.numberOfUsers}</div>
      <div className="btn">
        <button
          type="button"
          onClick={(e) => props.getAllUsers()}
          className="btn btn-warning"
        >
          Get all Users
        </button>
      </div>
    </div>
  )
}

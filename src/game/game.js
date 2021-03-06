import React from "react";
import "./game.css"
function Square(props) {
    return (
        <button className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    handleClick(i) {
        const _squares = this.state.squares.slice();
        _squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({ squares: _squares, xIsNext: !this.state.xIsNext, });
    }
    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)} />
        );
    }
    render() {
        const status = "Next play:" + (this.state.xIsNext ? 'X' : 'O');
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-new">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-new">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-new">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}
class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/*status */}</div>
                    <div>{/**TODO */}</div>
                </div>
            </div>
        )
    }
}
export default Game;
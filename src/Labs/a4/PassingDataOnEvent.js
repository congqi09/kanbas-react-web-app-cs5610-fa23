function PassingDataOnEvent() {
    const add = (a, b) => {
        alert(`${b} + ${a} = ${a + b}`);
    };
    return (
        <div>
            <h2>Passing Data on Event</h2>
            <button onClick={() => add(3, 2)}
                className="btn btn-primary">
                Pass 2 and 3 to add()
            </button>
        </div>
    );
}
export default PassingDataOnEvent;
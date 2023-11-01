function PassingFunctions({theFunction}) {
    return (
        <div>
            <h2>Passing Function</h2>
            <button className="btn btn-primary" onClick={theFunction}>
                Invoke the Function
            </button>
        </div>
    );
}

export default PassingFunctions;
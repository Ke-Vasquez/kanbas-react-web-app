function booleanVariable() {
    let numberVariable = 123;
    let floatPointNumber = 234.345;
    let true1 = true;
    let false1 = false;
    let false2 = true1 && false1;
    let true2 = true1 || false1;
    let true3 = !false2;
    let true4 = numberVariable === 123;
    let true5 = floatPointNumber !== 321.432;
    let false3 = numberVariable < 100;
    let sortaTrue = '1' == 1; // Never use this == 
    let notTrue = '1' === 1 // always use ===
    return (
        <div>
            <h2>Boolean Variables</h2>
                true1     = {true1 + ""}     <br />
                false1    = {false1 + ""}    <br />
                false2    = {false2 + ""}    <br />
                true2     = {true2 + ""}     <br />
                true3     = {true3 + ""}     <br />
                true4     = {true4 + ""}     <br />
                true5     = {true5 + ""}     <br />
                false3    = {false3 + ""}    <br />
                sortaTrue = {sortaTrue + ""} <br />
                notTrue   = {notTrue + ""}
        </div>
    );
};

export default booleanVariable;


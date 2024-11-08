const input=

{
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let output=Object.keys(input).map((s)=>{
    const sub=input[s];
    const total=Object.values(sub).reduce((sum,mark)=>sum+mark,0);
    const average=total/Object.values(sub).length;
    return {[s]:{Average:average}};
});
    console.log(output);
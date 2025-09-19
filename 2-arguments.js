const args = process.argv.slice(2);
if (args.length===0){
    console.log("No arguments");

}else if (args.length===1){
    console.log( "Argument found");

}else (args.length===2){
    console.log("Arguments found" );
}
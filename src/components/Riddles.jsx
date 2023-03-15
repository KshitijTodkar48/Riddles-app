export const getRiddles = async() =>{
   const response = await fetch("https://riddles-api.vercel.app/random",{
   method:"GET",
});
return await response.json() ;
}
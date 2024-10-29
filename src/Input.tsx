// import React, { useState } from 'react';

// const InputPara: React.FC = () => {
//   const [inputs, setInputs] = useState({
//     name: "",
//     description: "",
//     imageUri: "",
//     counterPackageId: "",
//     clueNft: "",
//     mintToSender: ""
//   });

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     // Here you would typically call the API or perform some action with the form data
//     console.log(inputs);
//   };

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setInputs(prevInputs => ({
//       ...prevInputs,
//       [name]: value
//     }));
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Create Counter</h2>
      
//       {/* Name */}
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input 
//           type="text" 
//           id="name" 
//           name="name" 
//           value={inputs.name} 
//           onChange={handleChange} 
//           required
//         />
//       </div>

//       {/* Description */}
//       <div>
//         <label htmlFor="description">Description:</label>
//         <textarea 
//           id="description" 
//           name="description" 
//           value={inputs.description} 
//           onChange={handleChange} 
//           required
//         ></textarea>
//       </div>

//       {/* Image URI */}
//       <div>
//         <label htmlFor="imageUri">Image URI:</label>
//         <input 
//           type="text" 
//           id="imageUri" 
//           name="imageUri" 
//           value={inputs.imageUri} 
//           onChange={handleChange} 
//           required
//         />
//       </div>

//       {/* Counter Package ID */}
//       <div>
//         <label htmlFor="counterPackageId">Counter Package ID:</label>
//         <input 
//           type="text" 
//           id="counterPackageId" 
//           name="counterPackageId" 
//           value={inputs.counterPackageId} 
//           onChange={handleChange} 
//           required
//         />
//       </div>

//       {/* Clue NFT */}
//       <div>
//         <label htmlFor="clueNft">Clue NFT:</label>
//         <input 
//           type="text" 
//           id="clueNft" 
//           name="clueNft" 
//           value={inputs.clueNft} 
//           onChange={handleChange} 
//           required
//         />
//       </div>

//       {/* Mint to Sender */}
//       <div>
//         <label htmlFor="mintToSender">Mint to Sender:</label>
//         <input 
//           type="text" 
//           id="mintToSender" 
//           name="mintToSender" 
//           value={inputs.mintToSender} 
//           onChange={handleChange} 
//           required
//         />
//       </div>

//       <button type="submit">Create Counter</button>
//     </form>
//   );
// };

// export default InputPara;
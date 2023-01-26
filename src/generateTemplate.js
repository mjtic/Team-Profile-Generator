
// html
// head
// body
// body
// html

// manager

// engineer

// intern

//function loops team array and outputs cards based on the role.






// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Team Profile</title>
//     <link
//       rel="stylesheet"
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
//       integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
//       crossorigin="anonymous"
//       referrerpolicy="no-referrer"
//     />

//     <link
//       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
//       rel="stylesheet"
//       integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
//       crossorigin="anonymous"
//     />
//     <link
//       rel="stylesheet"
//       href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
//     />
//     <link rel="stylesheet" href="style.css" />
//   </head>
  
//   <body>
//     <header>
//       <nav class="navbar" id="navbar">
//         <div class="container-fluid">
//           <span
//             class="navbar-brand mb-0 h1 w-100 text-center text-white"
//             id="navbar-text"
//             >My Team</span
//           >
//         </div>
//       </nav>
//     </header>

//     <main>
//       <div class="container">
//         <div class="row justify-content-center container-fluid" id="team-cards">
//           <!-- cards -->
//           <div class="col-4 mt-4">
//             <div class="card h-100">
//               <div class="card-header">
//                 <h3>Jared</h3>
//                 <h4>
//                   <i class="material-icons"
//                     ><span class="material-symbols-outlined"> coffee </span></i
//                   >Manager
//                 </h4>
//               </div>

//               <div class="card-body">
//                 <p class="id">ID: 1</p>
//                 <p class="email">
//                   Email:
//                   <a href="mailto:myeonghun.jeong88@gmail.com"
//                     >jared@fakemail.com</a
//                   >
//                 </p>
//                 <p class="office">Office Number: 1</p>
//               </div>
//             </div>
//           </div>

//           <div class="col-4 mt-4">
//             <div class="card h-100">
//               <div class="card-header">
//                 <h3>Alec</h3>
//                 <h4>
//                   <i class="material-icons"
//                     ><span class="material-symbols-outlined">
//                       engineering
//                     </span></i
//                   >Engineer
//                 </h4>
//               </div>

//               <div class="card-body">
//                 <p class="id">ID: 2</p>
//                 <p class="email">
//                   Email:
//                   <a href="mailto:alec@fakemail.com">alec@fakemail.com</a>
//                 </p>
//                 <p class="github">
//                   Github:
//                   <a href="https://github.com/mjtic/" target="_blank">alec</a>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div class="col-4 mt-4">
//             <div class="card h-100">
//               <div class="card-header">
//                 <h3>Grace</h3>
//                 <h4>
//                   <i class="material-icons"
//                     ><span class="material-symbols-outlined">
//                       engineering
//                     </span></i
//                   >Engineer
//                 </h4>
//               </div>

//               <div class="card-body">
//                 <p class="id">ID: 3</p>
//                 <p class="email">
//                   Email:
//                   <a href="mailto:grace@fakemail.com">grace@fakemail.com</a>
//                 </p>
//                 <p class="github">
//                   Github: <a href="https://github.com/mjtic/"></a>gchoi2u
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div class="col-4 mt-4">
//             <div class="card h-100">
//               <div class="card-header">
//                 <h3>Tammer</h3>
//                 <h4>
//                   <i class="material-icons"
//                     ><span class="material-symbols-outlined">
//                       engineering
//                     </span></i
//                   >Engineer
//                 </h4>
//               </div>

//               <div class="card-body">
//                 <p class="id">ID: 4</p>
//                 <p class="email">
//                   Email:
//                   <a href="mailto:tammer@fakemail.com">tammer@fakemail.com</a>
//                 </p>
//                 <p class="github">
//                   Github: <a href="https://github.com/mjtic/"></a>tammerg
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div class="col-4 mt-4">
//             <div class="card h-100">
//               <div class="card-header">
//                 <h3>John</h3>
//                 <h4>
//                   <i class="material-icons"
//                     ><span class="material-symbols-outlined"> school </span></i
//                   >Intern
//                 </h4>
//               </div>

//               <div class="card-body">
//                 <p class="id">ID: 5</p>
//                 <p class="email">
//                   Email:
//                   <a href="mailto:john@fakemail.com">john@fakemail.com</a>
//                 </p>
//                 <p class="school">School: 2University</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>

//     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
//     <script
//       src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
//       integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
//       crossorigin="anonymous"
//     ></script>
//   </body>
// </html>

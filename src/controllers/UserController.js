/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from "./users.js";

const index = ( ) => {
    console.log("index - Get All Users");
    users.forEach(function(users) {
        console.log(users);
    });
};

const store = (users) => {
    users.push(users);
};

export { index, store};

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */


const formatUser = (users) => users.map(function (name){
    return 'Mr/Mrs. ${name}';

});
console.log(formatUser);

function formatUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        }, 3000);
    });
}

    console.log("Users");

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = names.findByName (function (name) {'aufa', 'isfa', 'agung', 'nurul', 'jaki'});
    

function findByName() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            
        }, 2000);
    });
}
 console.log(findByName);
/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
const filterByMajor = major.filter((major) => major );

function filterByMajor () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
        }, 4000);
    });
}

console.log(filterByMajor);

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE

export {formatUser, findByName, filterByMajor};
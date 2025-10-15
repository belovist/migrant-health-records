/**
 * DHRMS Kerala - localStorage Manager
 * This script handles all interactions with the browser's localStorage 
 * for patient data, including saving new users and authenticating them.
 */

/**
 * Retrieves all patient data from localStorage.
 * @returns {Array} An array of patient objects, or an empty array if none exist.
 */
function getPatientData() {
  const patientsJSON = localStorage.getItem('dhrmsPatients');
  try {
    return patientsJSON ? JSON.parse(patientsJSON) : [];
  } catch (e) {
    console.error("Error parsing patient data from localStorage", e);
    return [];
  }
}

/**
 * Saves a new patient's data to localStorage.
 * It ensures no duplicate Aadhaar numbers are saved.
 * @param {object} newPatient - The patient object to save.
 * @returns {boolean} - True if save was successful, false if Aadhaar already exists.
 */
function savePatientData(newPatient) {
  const patients = getPatientData();
  
  const existingPatient = patients.find(patient => patient.aadhaar === newPatient.aadhaar);
  
  if (existingPatient) {
    alert('A patient with this Aadhaar number is already registered.');
    return false;
  }
  
  // In a real application, the password should be hashed on the server before storing.
  // For this front-end prototype, we are storing it as plain text.
  patients.push(newPatient);
  localStorage.setItem('dhrmsPatients', JSON.stringify(patients));
  return true;
}

/**
 * Authenticates a patient by their Aadhaar number and password.
 * @param {string} aadhaar - The Aadhaar number to check.
 * @param {string} password - The password to check.
 * @returns {object|null} - The patient object if authentication is successful, otherwise null.
 */
function authenticatePatient(aadhaar, password) {
  const patients = getPatientData();
  const patient = patients.find(p => p.aadhaar === aadhaar);

  if (patient && patient.password === password) {
    return patient;
  }
  
  return null;
}


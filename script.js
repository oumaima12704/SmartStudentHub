/* main.js - shared utilities for all pages */

/* Utility: format date */
function formatDateISO(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toISOString().slice(0,10);
}

/* Optional: ensure defaults exist */
if (!localStorage.getItem('ss_tasks')) localStorage.setItem('ss_tasks', JSON.stringify([]));
if (!localStorage.getItem('ss_planner')) localStorage.setItem('ss_planner', JSON.stringify([]));
if (!localStorage.getItem('ss_notes')) localStorage.setItem('ss_notes', JSON.stringify([]));
if (!localStorage.getItem('ss_budget')) localStorage.setItem('ss_budget', JSON.stringify({income:0, expenses:[]} ));
if (!localStorage.getItem('ss_modules')) localStorage.setItem('ss_modules', JSON.stringify({}));

/* helper: protect pages */
function requireLogin() {
  if (localStorage.getItem('ss_loggedIn') !== 'true') {
    window.location.href = 'login.html';
  }
}

/* global logout helper */
function logout() {
  localStorage.removeItem('ss_loggedIn');
  // optional: keep username so next time prefilled
  window.location.href = 'login.html';
}

/* optional: function to get username */
function getUsername() {
  return localStorage.getItem('ss_username') || 'Student';
}

/* Keep navbar active class - can be set by each page's anchor class manually in HTML */

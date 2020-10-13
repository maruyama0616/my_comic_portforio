"use strict";

{
  const open_1 = document.getElementById('open_1');
  const close_1 = document.getElementById('close_1');
  const modal_1 = document.getElementById('modal_1');
  const mask = document.getElementById('mask');

  open_1.addEventListener('click', () => {
    modal_1.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close_1.addEventListener('click', () => {
    modal_1.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    close_1.click();
  });

  const open_2 = document.getElementById('open_2');
  const close_2 = document.getElementById('close_2');
  const modal_2 = document.getElementById('modal_2');

  open_2.addEventListener('click', () => {
    modal_2.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close_2.addEventListener('click', () => {
    modal_2.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    close_2.click();
  });

  const open_3 = document.getElementById('open_3');
  const close_3 = document.getElementById('close_3');
  const modal_3 = document.getElementById('modal_3');

  open_3.addEventListener('click', () => {
    modal_3.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close_3.addEventListener('click', () => {
    modal_3.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    close_3.click();
  });

  const open_4 = document.getElementById('open_4');
  const close_4 = document.getElementById('close_4');
  const modal_4 = document.getElementById('modal_4');

  open_4.addEventListener('click', () => {
    modal_4.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close_4.addEventListener('click', () => {
    modal_4.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    close_4.click();
  });
}
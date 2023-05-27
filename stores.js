import { writable } from "svelte/store";

export const QRcodigo = writable(localStorage.getItem("QRcodigo") || "");

export const PriDaNombre = writable(localStorage.getItem("PriDaNombre") || "");
export const PriDaNombre1 = writable(localStorage.getItem("PriDaNombre1") || "");
export const PriDaFecha = writable(localStorage.getItem("PriDaFecha") || "");
export const PriDaMonto = writable(localStorage.getItem("PriDaMonto") || "");
export const PriDaMonto1 = writable(localStorage.getItem("PriDaMonto1") || "");
export const PriDaPone = writable(localStorage.getItem("PriDaPone") || "");
export const PriDaPone1 = writable(localStorage.getItem("PriDaPone1") || "");
export const PriDaNumero = writable(localStorage.getItem("PriDaNumero") || "");

export const SecDaMonto = writable(localStorage.getItem("SecDaMonto") || "");
export const SecDaMonto1 = writable(localStorage.getItem("SecDaMonto1") || "");
export const SecDaFecha = writable(localStorage.getItem("SecDaFecha") || "");
export const SecDaDes = writable(localStorage.getItem("SecDaDes") || "");

QRcodigo.subscribe(val => localStorage.setItem("QRcodigo", val));

PriDaNombre.subscribe(val => localStorage.setItem("PriDaNombre", val));
PriDaNombre1.subscribe(val => localStorage.setItem("PriDaNombre1", val));
PriDaFecha.subscribe(val => localStorage.setItem("PriDaFecha", val));
PriDaMonto.subscribe(val => localStorage.setItem("PriDaMonto", val));
PriDaMonto1.subscribe(val => localStorage.setItem("PriDaMonto1", val));
PriDaPone.subscribe(val => localStorage.setItem("PriDaPone", val));
PriDaPone1.subscribe(val => localStorage.setItem("PriDaPone1", val));
PriDaNumero.subscribe(val => localStorage.setItem("PriDaNumero", val));

SecDaMonto.subscribe(val => localStorage.setItem("SecDaMonto", val));
SecDaMonto1.subscribe(val => localStorage.setItem("SecDaMonto1", val));
SecDaFecha.subscribe(val => localStorage.setItem("SecDaFecha", val));
SecDaDes.subscribe(val => localStorage.setItem("SecDaDes", val));

export const PriDaCodigo = writable(localStorage.getItem("PriDaCodigo")|| "");
PriDaCodigo.subscribe(val => localStorage.setItem("PriDaCodigo", val));
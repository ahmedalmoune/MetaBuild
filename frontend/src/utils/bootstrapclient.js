/*
* File: bootstrapclient.js
* Description: Loads Bootstrap client-side script.
* Author: Internet
* Date: 5/3/2026
*/

"use client"
import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return null;
}
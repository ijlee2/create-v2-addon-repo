import { pageTitle } from 'ember-page-title';

import styles from './application.module.css';

<template>
  {{pageTitle "test-app"}}

  <div class={{styles.container}}>
    <header class={{styles.header}}>
    </header>

    <main class={{styles.main}}>
      <div class={{styles.center}}>
        {{outlet}}
      </div>
    </main>

    <footer class={{styles.footer}}>
    </footer>
  </div>
</template>

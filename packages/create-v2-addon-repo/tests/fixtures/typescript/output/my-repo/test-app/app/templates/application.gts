import { pageTitle } from 'ember-page-title';

<template>
  {{pageTitle "test-app"}}

  <div>
    <main>
      <div>
        {{outlet}}
      </div>
    </main>
  </div>
</template>

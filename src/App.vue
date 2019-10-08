<template>
  <v-app>
    <v-app-bar app color="primary" height="40">
      <v-app-bar-nav-icon color="secondary"></v-app-bar-nav-icon>
      <v-btn color="secondary" icon v-if="$vuetify.breakpoint.smAndUp">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-text-field
        append-icon="mdi-magnify"
        background-color="secondary"
        clearable
        hide-details
        label="Search"
        placeholder="Search..."
        rounded
        single-line
      ></v-text-field>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.smAndUp">
        <v-btn color="secondary" icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn color="secondary" icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app color="primary" height="40">
      <v-img
        alt="BYU Library logo"
        height="20"
        max-width="216"
        src="@/assets/logo.svg"
        v-if="$vuetify.breakpoint.mdAdndUp"
      ></v-img>
      <v-img
        alt="BYU Library logo"
        height="15"
        max-width="162"
        src="@/assets/logo.svg"
        v-else
      ></v-img>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.smAndUp">
        <router-link class="secondary--text" to="/hours">Hours</router-link>
        <span class="secondary--text">&nbsp;|&nbsp;</span>
        <router-link class="secondary--text" to="/location">Location</router-link>
        <span class="secondary--text">&nbsp;|&nbsp;</span>
        <router-link class="secondary--text" to="/contact">Contact</router-link>
        <span class="secondary--text">&nbsp;|&nbsp;</span>
        <router-link class="secondary--text" to="/blog">Blog</router-link>
        <span class="secondary--text">&nbsp;|&nbsp;</span>
        <router-link class="secondary--text" to="/social">Social</router-link>
      </div>
      <v-spacer></v-spacer>
      <span class="secondary--text" v-if="$vuetify.breakpoint.smAndUp">
        © 2019 Brigham Young University
      </span>
      <span class="secondary--text" v-else>
        © 2019 BYU
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue { }
</script>

<template>
  <div class="">
    <v-navigation-drawer permanent expand-on-hover>
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img
              src="/pictures/image3A36091_Glitch.svg"
              alt="picture of a spining blue earth with spining line around it"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> Schmoaaaaah </v-list-item-title>
            <v-list-item-subtitle>Noah</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/about">
          <v-list-item-icon>
            <v-icon>mdi-card-account-details-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
        <v-list-item to="/development">
          <v-list-item-icon>
            <v-icon>mdi-git</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Development</v-list-item-title>
        </v-list-item>
        <v-list-item to="/gaming">
          <v-list-item-icon>
            <v-icon>mdi-gamepad-variant-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Gaming</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-navigation-drawer>
  </div>
</template>

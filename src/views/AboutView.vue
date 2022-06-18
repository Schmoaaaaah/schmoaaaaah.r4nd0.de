<template>
  <v-expansion-panels class="mb-6">
    <v-expansion-panel>
      <v-expansion-panel-header disable-icon-rotate>
        <template #default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <span><strong>Insta</strong> Main</span>
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0"> Me without me </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
        <template #actions>
          <v-icon color="teal"> mdi-instagram </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <InstaMain />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <template #default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <span><strong>Insta</strong> Meme</span>
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0">
                  Meme's that make you turn around
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
        <template #actions>
          <v-icon color="teal"> mdi-instagram </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <Construction />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-expansion-panel>
      <v-expansion-panel-header disable-icon-rotate>
        <template #default="{ open }">
          <v-row no-gutters>
            <v-col cols="4">
              <strong>Twitter</strong>
            </v-col>
            <v-col cols="8" class="text--secondary">
              <v-fade-transition leave-absolute>
                <span v-if="open" key="0"> Twitter is dead isn't it 🙃</span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </template>
        <template #actions>
          <v-icon color="teal"> mdi-twitter </v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <Construction />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

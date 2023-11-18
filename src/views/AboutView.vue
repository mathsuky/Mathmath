<template>
  <v-container>
    <v-container>
      <v-stepper :items="['入力', '確認']">
        <template v-slot:item>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="タイトル"
            required
            class="mb-3"
          ></v-text-field>

          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="補足説明"
            required
            class="mb-3"
          ></v-text-field>
        </template>

        <template v-slot:item2>
          <v-card title="Step One" flat>...</v-card>
        </template>
      </v-stepper>
    </v-container>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      e1: 1
    }
  }
}
</script>

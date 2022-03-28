<template>
  <div class="row">
    <div class="col">
      <figure>
        <img
          :src="playerClass.imgPath"
          :alt="playerClass.className"
          class="crest"
        />
        <figcaption>
          <h3>{{ props.character.character_name }}</h3>
        </figcaption>
        <div class="row">
          <table class="container">
            <tbody>
              <tr>
                <!--                <td>-->
                <!--                  <h3>-->
                <!--                    <img-->
                <!--                      :src="karakter.faction_icon"-->
                <!--                      alt=""-->
                <!--                      class="faction-icon"-->
                <!--                    />-->
                <!--                  </h3>-->
                <!--                </td>-->
                <td>
                  <h3>{{ uid.gender }}</h3>
                </td>
                <td>
                  <h3>{{ uid.race }}</h3>
                </td>
                <td>
                  <h3>{{ playerClass.className }}</h3>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </figure>
    </div>
  </div>
</template>

<script setup>
import { searchUID, searchClass } from "../helpers/utils";

const props = defineProps(["character"]);
const uid = searchUID(props.character.race_uid);
const playerClass = searchClass(props.character.character_class);
</script>

<style scoped></style>

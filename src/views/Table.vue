<script setup>
import { ref, computed } from 'vue';

import TableBase from '@/components/Table/TableBase.vue';
import TableRow from '@/components/Table/TableRow.vue';
import TableData from '@/components/Table/TableData.vue';
import Button from '@/components/Button.vue';

const tableHeads = ['id', 'Author', 'Title', 'Cover', ''];
const tableColumnTempl = '50px 1fr 2fr 200px 140px';

const sortField = ref('id');
const typeSort = ref('asc');

const data = ref([
  {
    id: 1,
    author: 'Nirvana',
    title: 'Smells like teen spirit',
    image: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/pos23/23/68578-1000x830.jpg',
    bg: '#66b5f8',
  },
  {
    id: 7,
    author: 'Linkin park',
    title: 'In the end',
    image: 'https://opis-cdn.tinkoffjournal.ru/mercury/linkin-park-03.uyam1ax2arul..jpg',
    bg: '#66b5f8',
  },
  {
    id: 3,
    author: 'Blur ',
    title: 'Song 2',
    image: 'https://i.pinimg.com/originals/20/b3/71/20b3719dbaf9bb75698b41f1e58a1056.jpg',
    bg: '#fdafbb',
  },
]);

const dataSorted = computed(() => {
  const field = sortField.value.toLowerCase();

  return data.value.sort((a, b) => {
    let modifier = 1;
    if (typeSort.value === 'desc') modifier = -1;
    if (a[field] < b[field]) return -1 * modifier;
    if (a[field] > b[field]) return 1 * modifier;
    return 0;
  });
});

function changeSort(fieldName) {
  if (sortField.value === fieldName) {
    typeSort.value = typeSort.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortField.value = fieldName;
  }
}
</script>

<template>
  <h1 class="heading-1">Table</h1>
  <div class="wrapper">
    <table-base :heads="tableHeads" :columnTempl="tableColumnTempl" @sortingField="changeSort">
      <table-row v-for="itm of dataSorted" :key="itm.id" :columnTempl="tableColumnTempl" :bgColor="itm.bg">
        <table-data :dataTitle="tableHeads[0]">{{ itm.id }}</table-data>
        <table-data :dataTitle="tableHeads[1]">{{ itm.author }}</table-data>
        <table-data :dataTitle="tableHeads[2]">{{ itm.title }}</table-data>
        <table-data :image="true" :srcImg="itm.image"></table-data>
        <table-data>
          <Button label="Слушать" />
        </table-data>
      </table-row>
    </table-base>
  </div>
</template>

<style lang="scss"></style>

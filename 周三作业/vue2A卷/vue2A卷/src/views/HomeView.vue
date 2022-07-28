<template>
  <div class="home">
    <!-- 搜索 -->
    <p>
      <input type="text" v-model="keyWords" @keyup.enter="search" />
    </p>
    <!-- 表格 -->
    <table width="800" border cellspacing="0">
      <thead>
        <tr>
          <th>
            编号
            <Icon
              :class="{ idDown: true, up: idShow }"
              @click="idSort"
              :icon="1"
            />
          </th>
          <th>名称</th>
          <th>
            价格
            <Icon
              :class="{ priceDown: true, up: priceShow }"
              @click="priceSort"
              :icon="0"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in listItem" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.goods_name }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
    <!-- 条数 -->
    <p>
      每页<input type="text" :value="listItem.length" @blur="blur" />条,共{{
        listItem.length
      }}
    </p>
    <!-- 翻页组件 -->
    <Page />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Icon from "@/components/Icon.vue";
import Page from "../components/Page.vue";
export default {
  name: "HomeView",
  data() {
    return {
      /**
       * 数据列表
       */
      list: [],
      /**
       * id图片
       */
      idShow: false,
      /**
       * 价格图片
       */
      priceShow: false,
      /**
       * 搜索关键字
       */
      keyWords: "",
    };
  },
  methods: {
    /**
     * 显示条数
     */
    blur(e) {
      // console.log(e.target.value);
      this.list = this.list.slice(0, e.target.value);
      if (e.target.value > this.list.length) {
        window.location.reload();
      }
    },
    /**
     * 搜索
     */
    search() {
      if (this.keyWords) {
        const a = this.list.filter((item) => {
          if (item.goods_name.includes(this.keyWords)) {
            return item;
          }
        });
        this.list = a;
      } else {
        window.location.reload();
      }
    },
    /**
     * 获取数据列表
     */
    async getList() {
      const {
        data: { data },
      } = await axios.get("./data.json");
      this.list = data;
    },
    /**
     * ID排序
     */
    idSort() {
      this.idShow = !this.idShow;
      if (this.idShow) {
        this.list.sort((a, b) => {
          return b.id - a.id;
        });
      } else {
        this.list.sort((a, b) => {
          return a.id - b.id;
        });
      }
    },
    /**
     * 价格排序
     */
    priceSort() {
      this.priceShow = !this.priceShow;
      if (this.priceShow) {
        this.list.sort((a, b) => {
          return b.price - a.price;
        });
      } else {
        this.list.sort((a, b) => {
          return a.price - b.price;
        });
      }
    },
  },
  created() {
    this.getList();
  },
  computed: {
    listItem() {
      return this.list;
    },
  },
  components: { Icon, Page },
};
</script>
<style lang="scss">
.idDown {
  transition: 0.3s linear;
  transform: rotate(180deg);

  &.up {
    transform: rotate(0);
  }
}

.priceDown {
  transition: 0.3s linear;
  background-color: red;
  border-radius: 50%;
  &.up {
    transform: rotate(180deg);
  }
}

thead {
  background-color: #eeeeee;
}
</style>

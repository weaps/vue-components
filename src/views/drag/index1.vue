<template>
  <el-container>
    <el-aside width="200px" style="height: clac(100vh - 80px)">
      <div class="list2">
        <drop-list
          class="list2"
          :items="items2"
          mode="cut"
        >
          <template v-slot:item="{ item }">
            <drag
              :key="item.title"
              class="chip xxxxx"
              :data="item"
              @cut="remove(items2, item)"
            >
              <!-- <v-chip :color="reorder ? 'primary' : null">{{
                item.title
              }}</v-chip> -->
							<el-button type="primary">asdf</el-button>
            </drag>
          </template>
          <!-- <template v-slot:feedback="{ data }">
            <div class="chip xxxxxxxxx" :key="data.title">
              <v-chip color="primary">{{ data.title }}</v-chip>
            </div>
          </template>
          <template v-slot:inserting-drag-image="{ data }">
            <v-chip :key="data.title" style="transform: translate(-50%, -50%)"
              >{{ data.title }}
            </v-chip>
          </template>
          <template v-slot:reordering-drag-image="{ data }"></template> -->
        </drop-list>
      </div>
      <transition-group name="list" tag="div">
        <drag v-for="n in items2" :key="n.title" class="drag" :data="n" @cut="remove(n)"><el-button type="primary">{{n.title}}</el-button></drag>
      </transition-group>
    </el-aside>
    <el-main style="background: rgba(244,245,248,1);">
      <el-row :gutter="40">
        <el-col :span="8">
          <div class="list1">
          <drop
            :items="items1"
            @reorder="$event.apply(items1)"
            @insert="insert1"
            mode="cut"
            :accepts-data="ban(item)"
          >
            <template v-slot:item="{ item, reorder }">
              <drag :key="item.title" :data="item">
                <v-list-item
                  style="background-color: white"
                  :style="
                    reorder
                      ? { borderLeft: '12px solid #1976D2', marginLeft: '-2px' }
                      : {}
                  "
                >
                  <v-list-item-avatar>
                    <v-img :src="item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title" />
                    <v-list-item-subtitle v-html="item.subtitle" />
                  </v-list-item-content>
                </v-list-item>
                <v-divider />
              </drag>
            </template>
            <template v-slot:inserting-drag-image="{ data }">
              <v-list-item-avatar
                style="transform:translate(-50%, -50%) scale(1.5)"
              >
                <img :src="data.avatar" />
              </v-list-item-avatar>
            </template>
            <template v-slot:reordering-drag-image />
            <template v-slot:feedback="{ data }">
              <v-skeleton-loader
                type="list-item-avatar-three-line"
                :key="data.title"
                style="border-left: 12px solid #1976D2; margin-left: -2px;"
              />
							<!-- <h1 style="width: 200px;height:50px;background: red">{{data.title}}</h1> -->
							<!-- <v-skeleton-loader
								class="mx-auto"
								type="list-item-avatar-three-line"
								:key="data.title"
								max-width="300"
							></v-skeleton-loader> -->
            </template>
          </drop>
        </div>
        </el-col>
        <el-col :span="12">
          <div class="list1">
          <drop-list
            :items="items3"
            @reorder="$event.apply(items3)"
            @insert="insert3"
            mode="cut"
          >
            <template v-slot:item="{ item, reorder }">
              <drag :key="item.title" :data="item">
                <!-- <v-list-item
                  style="background-color: white"
                  :style="
                    reorder
                      ? { borderLeft: '12px solid #1976D2', marginLeft: '-2px' }
                      : {}
                  "
                >
                  <v-list-item-avatar>
                    <v-img :src="item.avatar" />
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title v-html="item.title" />
                    <v-list-item-subtitle v-html="item.subtitle" />
                  </v-list-item-content>
                </v-list-item>
                <v-divider /> -->
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>{{item.title}}</span>
                    <el-button size="mini" style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                  </div>
                  <div :style="
                    reorder
                      ? { borderLeft: '12px solid #1976D2', marginLeft: '-2px' }
                      : {}
                  "
                  ><el-avatar :src="item.avatar"></el-avatar><span v-html="item.subtitle"></span></div>
                </el-card>
              </drag>
            </template>
            <template v-slot:inserting-drag-image="{ data }">
              <v-list-item-avatar
                style="transform:translate(-50%, -50%) scale(1.5)"
              >
                <img :src="data.avatar" />
              </v-list-item-avatar>
            </template>
            <template v-slot:reordering-drag-image />
            <template v-slot:feedback="{ data }">
              <v-skeleton-loader
                type="list-item-avatar-three-line"
                :key="data.title"
                style="border-left: 12px solid #1976D2; margin-left: -2px;"
              />
							<!-- <h1 style="width: 200px;height:50px;background: red">{{data.title}}</h1> -->
							<!-- <v-skeleton-loader
								class="mx-auto"
								type="list-item-avatar-three-line"
								:key="data.title"
								max-width="300"
							></v-skeleton-loader> -->
            </template>
          </drop-list>
        </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { Drag, Drop, DropList } from "vue-easy-dnd";

export default {
  name: "App",
  components: {
    Drag,
    DropList,
    Drop,
  },
  computed: {
    
  },
  data: function() {
    return {
      items1: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Summer BBQ",
          subtitle:
            "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
        },
      ],
      items2: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          subtitle:
            "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
      items3: [
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/6.jpg",
          title: "Birthday giftxxxxx",
          subtitle:
            "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?",
        }
      ]
    };
  },
  methods: {
    insert1(event) {
      this.items1.splice(event.index, 0, event.data);
    },
    insert3(event) {
			// debugger
      this.items3.splice(event.index, 0, event.data);
    },
    remove(array, value) {
      let index = array.indexOf(value);
      array.splice(index, 1);
    },
    ban(data) {
      console.log(data)
      return true
    }
  },
};
</script>

<style>
html,
body {
  height: 100%;
  font-family: "Roboto";
}

.list1 {
  height: 100%;
}

.list2 {
  /* display: flex; */
  /* height: 100%; */
}

.chip {
  margin: 10px;
}
.drop-list  > div + div {
  margin-top: 20px;
}
.drop-allowed.drop-in * {
  cursor: inherit !important;
}
.el-aside {
  height: calc(100vh - 80px);
}
</style>

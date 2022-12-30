<template>


    <el-row>
        <el-col :span="3">
            <div style="background-color:#2B2F3A" class="top-icon">
                <img src="@/assets/logo.png" style="max-width:20px">
                <span>代理後台</span>
            </div>
        </el-col>
    </el-row>

    <el-row class="sidebar-container">
        <el-col :span="3">

            <el-menu active-text-color="#ffd04b" background-color="#304056" text-color="#fff" @open="handleOpen"
                @close="handleClose">

                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
        </el-col>

    </el-row>



</template>


<script setup lang="ts">
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.el-menu {
    border-right: none;
    height: 100%
}

.sidebar-container {
    height: 100%;
}

.top-icon {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 20px  0px 20px 20px;
    color: #fff;
    font-size: small;
    img {
        margin-right: 15px;
    }
}
</style>
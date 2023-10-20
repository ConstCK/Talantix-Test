<template>
    <form class="form">
        <div>{{ currentTime }}</div>
        <user-select v-model="city" @change="cityChange">
            <option class="option" v-for="city in citiesList" :key="city">{{ city }}</option>
        </user-select>
        <user-select v-model="department" @change="departmentChange" :class="{ disabled: city.length == 0 }">
            <option v-for="department in departmentList" :key="department">{{ department }}</option>
        </user-select>
        <user-select v-model="employee" :class="{ disabled: city.length == 0 || department.length == 0 }">
            <option v-for=" employee  in  staffList " :key="employee">{{ employee }}</option>
        </user-select>
        <div class="form-content">Бригада: {{ getBrigade }}</div>
        <user-button @click="postData">Отправить</user-button>
    </form>
</template>

<script>
import { establishmentList } from "@/constants/data.js";
import { sendData } from "@/API/services.js";
import UserButton from "./UI/UserButton.vue";
import UserSelect from "./UI/UserSelect.vue";

export default {
    components: {
        UserButton, UserSelect
    },
    data() {
        return {
            allData: establishmentList,
            citiesList: [],
            departmentList: [],
            staffList: [],
            selectedCity: "",
            city: "",
            department: "",
            employee: "",
            brigade: 0,
            time: new Date()
        }
    },
    methods: {
        cityChange(event) {
            let dataPool = null;
            this.selectedCity = event.target.value
            this.departmentList = []
            this.staffList = []

            if (event.target.value == "") {
                dataPool = this.allData
            } else {
                dataPool = this.allData.filter((el) => {
                    return el.city == event.target.value
                })
            }
            dataPool.forEach((el) => {
                let deps = el.department
                deps.forEach((el) => {
                    this.departmentList.push(el.name)
                    this.staffList.push(...el.staff)
                })
            })
        },
        departmentChange(event) {
            this.staffList = [];
            let dataPool = null;

            if (this.selectedCity.length > 0) {
                dataPool = this.allData.filter((el) => {
                    return el.city == this.selectedCity
                })
            } else {
                dataPool = this.allData
            }

            dataPool.forEach((el) => {
                let deps = el.department
                deps.forEach((el) => {
                    if (el.name == event.target.value) {
                        this.staffList.push(...el.staff)
                        this.city = this.selectedCity
                    }
                })
            })


        },
        postData() {
            this.$cookies.set("city", this.city)
            this.$cookies.set("department", this.department)
            this.$cookies.set("employee", this.employee)
            this.$cookies.set("brigade", this.getBrigade)
            sendData(this.dataForSQL)
        }
    },
    computed: {
        getBrigade() {
            let currentHour = this.time.getHours()
            if (currentHour >= 20 || currentHour < 8) {
                this.brigade = 2
            } else {
                this.brigade = 1
            }
            return this.brigade
        },
        currentTime() {
            return this.time.toLocaleTimeString()
        },
        dataForSQL() {
            return [this.city, this.department, this.employee, this.getBrigade]
        }
    },
    mounted() {
        let dataPool = null;
        dataPool = establishmentList
        dataPool.forEach((el) => {
            this.citiesList.push(el.city)
            let deps = [...el.department]
            deps.forEach((el) => {
                this.departmentList.push(el.name)
                this.staffList.push(...el.staff)
            })
        })
    },
}
</script>

<style scoped>
.form {
    display: flex;
    flex-direction: column;
    margin: 50px auto;
    padding: 30px;
    align-items: center;
    width: 90%;
    font-family: 'Primary', Courier, monospace;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 5px 10px rgba(20, 20, 20, 0.1);
    border: 1px teal solid;
}

.form select {
    width: 50%;
}

option {
    padding: 10px;
    text-align: center;
}

.disabled {
    pointer-events: none;
    background-color: rgba(0, 0, 0, .1);
}
</style>
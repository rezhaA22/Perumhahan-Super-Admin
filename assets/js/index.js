(async () => {
    const baseurl = 'http://localhost:3000'
    // Define Components
    const Dashboard = {
        data() {
            return {
                judul: "dasboard",
            };
        },
        template: await loadcomponent("./assets/component/Dasboard.html"),
        mounted() {
            // Panggil fungsi resize echart ketika komponen selesai dimuat
            this.addchart();
            this.autoSizeChart();
        },

        methods: {
            addchart() {
                var budgetChart = echarts
                    .init(document.querySelector("#budgetChart"))
                    .setOption({
                        legend: {
                            data: ["Allocated Budget", "Actual Spending"],
                        },
                        radar: {
                            // shape: 'circle',
                            indicator: [
                                {
                                    name: "Sales",
                                    max: 6500,
                                },
                                {
                                    name: "Administration",
                                    max: 16000,
                                },
                                {
                                    name: "Information Technology",
                                    max: 30000,
                                },
                                {
                                    name: "Customer Support",
                                    max: 38000,
                                },
                                {
                                    name: "Development",
                                    max: 52000,
                                },
                                {
                                    name: "Marketing",
                                    max: 25000,
                                },
                            ],
                        },
                        series: [
                            {
                                name: "Budget vs spending",
                                type: "radar",
                                data: [
                                    {
                                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                                        name: "Allocated Budget",
                                    },
                                    {
                                        value: [5000, 14000, 28000, 26000, 42000, 21000],
                                        name: "Actual Spending",
                                    },
                                ],
                            },
                        ],
                    });
            },
            autoSizeChart() {
                console.log("okok");
                new ResizeObserver(function () {
                    select(".echart", true).forEach((getEchart) => {
                        echarts.getInstanceByDom(getEchart).resize();
                    });
                }).observe(select("#main"));
                console.log("okok");
            },
        },
    };
    // perumahan component
    const ListPerumahan = {
        template: await loadcomponent(
            "./assets/component/List-perumahan.html"
        ),
        mounted() {
            this.initDatatable();
        },
        methods: {
            initDatatable() {
                const datatables = select(".datatable", true);
                datatables.forEach((datatable) => {
                    new simpleDatatables.DataTable(datatable, {
                        perPageSelect: [5, 10, 15, ["All", -1]],
                        columns: [
                            {
                                select: 2,
                                sortSequence: ["desc", "asc"],
                            },
                            {
                                select: 3,
                                sortSequence: ["desc"],
                            },
                            {
                                select: 4,
                                cellClass: "green",
                                headerClass: "red",
                            },
                        ],
                    });
                });
            },
        },
    };

    const Tambahperumahan = {
        template: await loadcomponent(
            "./assets/component/Form-addPerumahan.html"
        ),

        data() {
            return {
                formData: {
                    complex_name: "",
                    location: "",
                    description: "",
                },
                error: null,
            };
        },
        mounted() {
            this.initValidate();
        },
        methods: {
            submitForm() {
                // submint action
            },
            initValidate() {
                const needsValidation =
                    document.querySelectorAll(".needs-validation");

                Array.prototype.slice
                    .call(needsValidation)
                    .forEach(function (form) {
                        form.addEventListener(
                            "submit",
                            function (event) {
                                if (!form.checkValidity()) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }

                                form.classList.add("was-validated");
                            },
                            false
                        );
                    });
            },
        },
    };

    const Editperumahan = {
        template: await loadcomponent(
            "./assets/component/Form-editPerumahan.html"
        ),

        data() {
            return {
                formData: {
                    complex_name: "",
                    location: "",
                    description: "",
                },
                error: null,
            };
        },
        mounted() {
            this.initValidate();
        },
        methods: {
            submitForm() {
                if (!this.formData.complex_name) {
                    this.errorMessage = "Nama Perumahan harus diisi.";
                    return;
                } else {
                    this.errorMessage = ""; // Menghapus pesan kesalahan jika input valid
                }
            },
            initValidate() {
                const needsValidation =
                    document.querySelectorAll(".needs-validation");

                Array.prototype.slice
                    .call(needsValidation)
                    .forEach(function (form) {
                        form.addEventListener(
                            "submit",
                            function (event) {
                                if (!form.checkValidity()) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }

                                form.classList.add("was-validated");
                            },
                            false
                        );
                    });
            },
        },
    };

    //admin component
    const ListAdmin = {
        template: "<div><h2>list Admin</h2><p>List Admin.</p></div>",
    };

    const TambahAdmin = {
        template: "<div><h2>Tambah Admin</h2><p>Tambah Admin.</p></div>",
    };

    const LogAdmin = {
        template: await loadcomponent("./assets/component/Log-admin.html"),
        mounted() {
            this.initDatatable();
        },
        methods: {
            initDatatable() {
                const datatables = select(".datatable", true);
                datatables.forEach((datatable) => {
                    new simpleDatatables.DataTable(datatable, {
                        perPageSelect: [5, 10, 15, ["All", -1]],
                        columns: [
                            {
                                select: 2,
                                sortSequence: ["desc", "asc"],
                            },
                            {
                                select: 3,
                                sortSequence: ["desc"],
                            },
                            {
                                select: 4,
                                cellClass: "green",
                                headerClass: "red",
                            },
                        ],
                    });
                });
            },
        },
    };
    //Sales Component
    const ListSales = {
        template: await loadcomponent("./assets/component/List-Sales.html"),
        mounted() {
            this.initDatatable();
        },
        methods: {
            initDatatable() {
                const datatables = select(".datatable", true);
                datatables.forEach((datatable) => {
                    new simpleDatatables.DataTable(datatable, {
                        perPageSelect: [5, 10, 15, ["All", -1]],
                        columns: [
                            {
                                select: 2,
                                sortSequence: ["desc", "asc"],
                            },
                            {
                                select: 3,
                                sortSequence: ["desc"],
                            },
                            {
                                select: 4,
                                cellClass: "green",
                                headerClass: "red",
                            },
                        ],
                    });
                });
            },
        },
    };

    const EditSales = {
        template: await loadcomponent(
            "./assets/component/Form-editSales.html"
        ),

        data() {
            return {
                formData: {
                    harga: "",
                    username: "",
                    rumah: "",
                },
                error: null,
            };
        },
        mounted() {
            this.initValidate();
        },
        methods: {
            submitForm() {
                if (!this.formData.complex_name) {
                    this.errorMessage = "Nama Perumahan harus diisi.";
                    return;
                } else {
                    this.errorMessage = ""; // Menghapus pesan kesalahan jika input valid
                }
            },
            initValidate() {
                const needsValidation =
                    document.querySelectorAll(".needs-validation");

                Array.prototype.slice
                    .call(needsValidation)
                    .forEach(function (form) {
                        form.addEventListener(
                            "submit",
                            function (event) {
                                if (!form.checkValidity()) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }

                                form.classList.add("was-validated");
                            },
                            false
                        );
                    });
            },
        },
    };

    const AddSales = {
        template: await loadcomponent(
            "./assets/component/Form-addSales.html"
        ),

        data() {
            return {
                formData: {
                    harga: "",
                    username: "",
                    rumah: "",
                },
                error: null,
            };
        },
        mounted() {
            this.initValidate();
        },
        methods: {
            async submitForm() {
                for (const key in this.formData) {
                    if (!this.formData[key]) {
                        console.log("isi full ");
                        return;
                    }
                }
                try {
                    const formDataLogin = new URLSearchParams();
                    formDataLogin.append("username", "asep11");
                    formDataLogin.append("password", "1234");
                    const reslogin = await fetch("http://localhost:3000/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: formDataLogin.toString(),
                    });
                    if (!reslogin.ok) {
                        const errorData = await reslogin.json();
                        throw new Error(`Login failed: ${errorData.message}`);
                    }
                    const loginData = await reslogin.json();
                    console.log(loginData);
                    console.log("add sales");
                    const formData = new URLSearchParams();
                    formData.append("sale_price", this.formData.harga);
                    formData.append("username", this.formData.username);
                    formData.append("house_id", this.formData.rumah);
                    console.log(formData.toString());
                    const res = await fetch("http://localhost:3000/sales/Add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                            Authorization: `Bearer ${loginData.token}`,
                        },
                        body: formData.toString(),
                    });
                    if (res.ok) {
                        alert("ok");
                    } else {
                        const errorData = await res.json();
                        alert(`bad ${errorData.message}`);
                    }
                } catch (error) {
                    console.log(error);
                    alert(`error ${error.message}`);
                }
            },
            initValidate() {
                const needsValidation =
                    document.querySelectorAll(".needs-validation");

                Array.prototype.slice
                    .call(needsValidation)
                    .forEach(function (form) {
                        form.addEventListener(
                            "submit",
                            function (event) {
                                if (!form.checkValidity()) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }

                                form.classList.add("was-validated");
                            },
                            false
                        );
                    });
            },
        },
    };

    // lain lain
    const ListRumah = {
        template: "<div><h2>List Rumah</h2><p>List of Rumah.</p></div>",
    };

    //pengelola
    const listPlengelola = {

        template: await loadcomponent("./assets/component/List_pengelola.html"),
        data() {
            return {
                dataPengelola: [],
                error: null,
            };
        },
        async mounted() {
            try {
                this.dataPengelola = await this.getData()
                console.log(this.dataPengelola);

            } catch (error) {
                console.log(error);
            }
        },
        watch: {
            dataPengelola() {
                this.$nextTick(this.initDatatable);
            }
        },
        methods: {
            initDatatable() {
                const datatables = select(".datatable", true);
                datatables.forEach((datatable) => {
                    new simpleDatatables.DataTable(datatable, {
                        perPageSelect: [5, 10, 15, ["All", -1]],
                        columns: [
                            {
                                select: 2,
                                sortSequence: ["desc", "asc"],
                            },
                            {
                                select: 3,
                                sortSequence: ["desc"],
                            },
                            {
                                select: 4,
                                cellClass: "green",
                                headerClass: "red",
                            },
                        ],
                    });
                });
            },
            async getData() {
                const url = `${baseurl}/pengelola`
                const res = await fetch(url, {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZXAxMSIsInVzZXJJZCI6MSwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MTkyMjY1MDYsImV4cCI6MTcxOTI1NTMwNn0.kLe5qZwUld7a3R2nANF3gJkWYbpjU8jd-zwn3K3sZmA'
                    }
                })
                if (!res.ok) {
                    throw new Error(`Error fetching data: ${res.statusText}`);
                }

                return await res.json()
            }
        },
    };

    const AddPengelola = {
        template: await loadcomponent(
            "./assets/component/Form-addPengelola.html"
        ),

        data() {
            return {
                dataPerumahan: [],
                formData: {
                    username: "",
                    Perumahan: "",

                },
                error: null,
            };
        },
        async mounted() {
            this.initValidate();
            this.dataPerumahan = await this.getData()
            console.log(this.dataPerumahan);
        },
        methods: {
            async submitForm() {
                for (const key in this.formData) {
                    if (!this.formData[key]) {
                        console.log("isi full ");
                        return;
                    }
                }
                try {
                    const formData = new URLSearchParams();
                    formData.append("complex_id", this.formData.perumahan);
                    formData.append("username", this.formData.username);
                    console.log(formData.toString());
                    // const res = await fetch(`${baseurl}/pengelola`, {
                    //     method: "POST",
                    //     headers: {
                    //         "Content-Type": "application/x-www-form-urlencoded",
                    //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZXAxMSIsInVzZXJJZCI6MSwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MTkyMzA4NDIsImV4cCI6MTcxOTI1OTY0Mn0.yDal7kRhte4IejERx2lURkRYX09viWthE9sbLsuzCsU`,
                    //     },
                    //     body: formData.toString(),
                    // });
                    // if (res.ok) {
                    //     alert("ok");
                    // } else {
                    //     const errorData = await res.json();
                    //     alert(`bad ${errorData.message}`);
                    // }
                } catch (error) {
                    console.log(error);
                    alert(`error ${error.message}`);
                }
            },
            initValidate() {
                const needsValidation =
                    document.querySelectorAll(".needs-validation");

                Array.prototype.slice
                    .call(needsValidation)
                    .forEach(function (form) {
                        form.addEventListener(
                            "submit",
                            function (event) {
                                if (!form.checkValidity()) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }

                                form.classList.add("was-validated");
                            },
                            false
                        );
                    });
            },
            async getData() {
                const url = `${baseurl}/perumahan/getAll`
                const res = await fetch(url, {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZXAxMSIsInVzZXJJZCI6MSwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MTkyMzA4NDIsImV4cCI6MTcxOTI1OTY0Mn0.yDal7kRhte4IejERx2lURkRYX09viWthE9sbLsuzCsU'
                    }
                })
                if (!res.ok) {
                    throw new Error(`Error fetching data: ${res.statusText}`);
                }

                return await res.json()
            }

        },
    };

    const EditPengelola = {
        template: await loadcomponent(
            "./assets/component/Form-editPengelola.html"
        ),

        data() {
            return {
                formData: {
                    complex_name: "",
                    location: "",
                    description: "",
                },
                error: null,
            };
        },
        mounted() {
            this.initValidate();
        },
        methods: {
            submitForm() {
                // submint action
            },
            initValidate() {
                const needsValidation =
                    document.querySelectorAll(".needs-validation");

                Array.prototype.slice
                    .call(needsValidation)
                    .forEach(function (form) {
                        form.addEventListener(
                            "submit",
                            function (event) {
                                if (!form.checkValidity()) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }

                                form.classList.add("was-validated");
                            },
                            false
                        );
                    });
            },
        },
    };

    const Listkomen= {

        template: await loadcomponent("./assets/component/ListCommentPelanggan.html"),
        data() {
            return {
                dataKomentar: [],
                error: null,
            };
        },
        async mounted() {
            try {
                this.dataKomentar = await this.getData()
                console.log(this.dataKomentar);

            } catch (error) {
                console.log(error);
            }
        },
        watch: {
            dataKomentar() {
                this.$nextTick(this.initDatatable);
            }
        },
        methods: {
            initDatatable() {
                const datatables = select(".datatable", true);
                datatables.forEach((datatable) => {
                    new simpleDatatables.DataTable(datatable, {
                        perPageSelect: [5, 10, 15, ["All", -1]],
                        columns: [
                            {
                                select: 2,
                                sortSequence: ["desc", "asc"],
                            },
                            {
                                select: 3,
                                sortSequence: ["desc"],
                            },
                            {
                                select: 4,
                                cellClass: "green",
                                headerClass: "red",
                            },
                        ],
                    });
                });
            },
            async getData() {
                const url = `${baseurl}/review`
                const res = await fetch(url, {
                    headers: {
                        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFzZXAxMSIsInVzZXJJZCI6MSwicm9sZSI6InN1cGVyYWRtaW4iLCJpYXQiOjE3MTkyMjY1MDYsImV4cCI6MTcxOTI1NTMwNn0.kLe5qZwUld7a3R2nANF3gJkWYbpjU8jd-zwn3K3sZmA'
                    }
                })
                if (!res.ok) {
                    throw new Error(`Error fetching data: ${res.statusText}`);
                }

                return await res.json()
            }
        },
    };

    // Define Routes
    const routes = [
        { path: "/dashboard", component: Dashboard },
        { path: "/ListPerumahan", component: ListPerumahan },
        { path: "/Tambahperumahan", component: Tambahperumahan },
        { path: "/Editperumahan", component: Editperumahan },
        { path: "/ListAdmin", component: ListAdmin },
        { path: "/TambahAdmin", component: TambahAdmin },
        { path: "/LogAdmin", component: LogAdmin },
        { path: "/ListSales", component: ListSales },
        { path: "/EditSales", component: EditSales },
        { path: "/AddSales", component: AddSales },
        { path: "/ListRumah", component: ListRumah },
        { path: "/Listpengelola", component: listPlengelola },
        { path: "/Addpengelola", component: AddPengelola },
        { path: "/EditdPengelola", component: EditPengelola },
        { path: "/Listkomen", component: Listkomen },
    ];

    // Create Router Instance
    const router = new VueRouter({
        routes,
    });
    router.push("/dashboard");
    // obj vue
    new Vue({
        el: "#app",
        router,
    });
})();
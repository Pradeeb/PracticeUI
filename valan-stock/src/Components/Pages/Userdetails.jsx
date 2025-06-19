import {
    Card,
    CardContent,
    Typography,
    Chip,
    Grid,
    Divider,
    Box,
} from '@mui/material';


const Userdetails = (user) => {
    let userData = user.user;
    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card className="rounded-2xl shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-700 mb-4">👤 User Profile</Typography>
                            <Divider className="mb-4" />
                            <Typography><strong>Client Code:</strong> {userData.clientcode}</Typography>
                            <Typography><strong>Email:</strong> {userData.email || 'N/A'}</Typography>
                            <Typography><strong>Mobile:</strong> {userData.mobileno || 'N/A'}</Typography>
                            <Typography><strong>Last Login:</strong> {userData.lastlogintime || 'N/A'}</Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card className="rounded-2xl shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-700 mb-4">📈 Exchange Access</Typography>
                            <Divider className="mb-4" />
                            <Box className="flex flex-wrap gap-2 pt-7">
                                {userData.exchanges.map((ex, i) => (
                                    <Chip key={i} label={ex.toUpperCase()} color="primary" />
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card className="rounded-2xl shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-700 mb-4 ">🛠️ Product Access</Typography>
                            <Divider className="mb-4" />
                            <Box className="flex flex-wrap gap-2 pt-7">
                                {userData.products.map((prod, i) => (
                                    <Chip key={i} label={prod} color="secondary" />
                                ))}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Userdetails